using sprinterBoardDTO.Services.Interface;
using sprinterBoardDTO.ViewModels;
using spriterBoardDAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace sprinterBoardDTO.Services.Concrete
{
    public class TaskService :BaseService, ITaskService
    {
        public TaskService(string ConnectionString):base(ConnectionString)
        {
        }

       
        public async System.Threading.Tasks.Task<IEnumerable<TaskRowViewModel>> GetAllAsync(string userId)
        {
            Queue<TaskViewModel> inProg = GetTasksQueue(TaskStatus.InProgress, userId);
            Queue<TaskViewModel> toDo = GetTasksQueue(TaskStatus.ToDo,userId);
            Queue<TaskViewModel> done = GetTasksQueue(TaskStatus.Done, userId);

            Func<Queue<TaskViewModel>, TaskViewModel> queueHandler = (queue) => {
                return queue.Count > 0 ? queue.Dequeue() : null;
            };

            List<TaskRowViewModel> rows = new List<TaskRowViewModel>();
            while (toDo.Count > 0 || inProg.Count > 0 || done.Count > 0)
            {
                rows.Add(new TaskRowViewModel
                {
                    ToDo = queueHandler(toDo),
                    InProgress = queueHandler(inProg),
                    Done = queueHandler(done)
                });
            }

            return  rows;
        }

        public async System.Threading.Tasks.Task<TaskViewModel> GetTaskAsync(int id)
        {
            var task =await DatabaseContext.Tasks.FirstOrDefaultAsync(x=>x.Id==id);
            return mapTaskToTaskViewModel(task);
        }

        public async System.Threading.Tasks.Task<long> AddAsync(TaskViewModel task)
        {
            Task taskDAL = mapTaskViewModelToTask(task);
            taskDAL.User = 
                DatabaseContext.AppUsers.
                FirstOrDefault(x=>x.UserName==task.UserId);

            await DatabaseContext.Tasks.AddAsync(
               taskDAL
               );
            await DatabaseContext.SaveChangesAsync();
            return taskDAL.Id;
        }

        public async System.Threading.Tasks.Task<TaskViewModel> UpdateAsync(TaskViewModel task)
        {
            var model = DatabaseContext.Tasks.Include(x=>x.User).FirstOrDefault(x => x.Id == task.Id);
            model.Description = task.Description;
            model.Name = task.Name;
            model.Status = task.Status;
            model.User = model.User;
            model.Order = task.Order;
            DatabaseContext.Update(model);
            await DatabaseContext.SaveChangesAsync();
            return mapTaskToTaskViewModel(model);
        }


        #region mapper
        static Func<Task, TaskViewModel> mapTaskToTaskViewModel = model => {
            return new TaskViewModel
            {
                Id = model.Id,
                Name = model.Name,
                Description = model.Description,
                Status = model.Status,
                UserId = model.User.Id,
                Order = model.Order
            };
        };

       static Func<AppUser, UserViewModel> mapAppUserToUserViewModel = model =>
         {
             return new UserViewModel
             {
                 Id=model.Id,
                 FirstName=model.FirstName,
                 LastName=model.LastName
             };
         };


        Func<TaskViewModel, Task> mapTaskViewModelToTask = viewModel =>
        {
            return new Task
            {
                Id = viewModel.Id,
                Name = viewModel.Name,
                Description = viewModel.Description,
                Status = viewModel.Status,
                Order = viewModel.Order
            };
        };

        private  Queue<TaskViewModel> GetTasksQueue(TaskStatus status,string userId)
        {
            Queue<TaskViewModel> queue = new Queue<TaskViewModel>();

            DatabaseContext.Tasks
            .Include(b=>b.User)
            .Where(x => x.Status == status && x.User.UserName == userId)
            .OrderBy(x => x.Order)
            .ToAsyncEnumerable()
            . ForEach(
                (x) => queue.Enqueue(mapTaskToTaskViewModel.Invoke(x))
            );
            return queue;
        }

        public void Remove(int  id)
        {
            var toRemove =DatabaseContext.Tasks.FirstOrDefault(x => x.Id == id);
            
            DatabaseContext.Tasks.Remove(toRemove);
            DatabaseContext.SaveChangesAsync();
        }





        #endregion
    }
}
