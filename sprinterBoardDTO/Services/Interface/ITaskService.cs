using sprinterBoardDTO.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace sprinterBoardDTO.Services.Interface
{
    public interface ITaskService:IService
    {
        Task<TaskViewModel> GetTaskAsync(int id);
        Task<IEnumerable<TaskRowViewModel>> GetAllAsync(string userID);
        Task<long> AddAsync(TaskViewModel task);
        Task<TaskViewModel> UpdateAsync(TaskViewModel task);
    }
}
