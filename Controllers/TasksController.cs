using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using evidenceApp.Models;
using System.Linq;
using evidenceApp.ViewModels;
using System;
using System.Linq.Expressions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace TasksApi.Controllers
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Authorize]
    [Route("api/Tasks")]
    public class TasksController : Controller
    {
        private readonly TaskContext _context;

        public TasksController(TaskContext context)
        {
            _context = context;
        }

        
        
        [HttpGet("[action]/{id}")]
        public Task GetDetails(int id){
            
            return _context.Tasks.FirstOrDefault(x=>x.Id==id);
        }

        [HttpGet("[action]")]
        public IEnumerable<TaskRow> GetAll()
        {
            
           Queue<Task> inProg=new Queue<Task>();
           _context.Tasks
           .Where(x=>x.Status==TaskStatus.InProgress)
           .OrderBy(x=>x.Order)
           .ToList()
           .ForEach(
               (x)=>inProg.Enqueue(x)
           );

           Queue<Task> toDo=new Queue<Task>();          
           _context.Tasks
           .Where(x=>x.Status==TaskStatus.ToDo)
           .OrderBy(x=>x.Order)
           .ToList()
           .ForEach(
               (x)=>toDo.Enqueue(x)
           );

           Queue<Task> done=new Queue<Task>();          
           _context.Tasks
           .Where(x=>x.Status==TaskStatus.Done)
           .OrderBy(x=>x.Order)
           .ToList()
           .ForEach(
               (x)=>done.Enqueue(x)
           );

           Func<Queue<Task>,Task> queueHandler=(queue)=>{
               return queue.Count>0?queue.Dequeue():null;
           };

           List<TaskRow> rows=new List<TaskRow>();
           while(toDo.Count>0 || inProg.Count>0 || done.Count>0){
               rows.Add(new TaskRow{
                   ToDo=queueHandler.Invoke(toDo),
                   InProgress=queueHandler.Invoke(inProg),
                   Done=queueHandler.Invoke(done)
               });
           }
           
           return rows;
        }

        

        [HttpPost]
        public IActionResult Add([FromBody]Task task)
        {

            task.Order=_context.Tasks.Count()>0 ? _context.Tasks.Where(x=>x.Status==TaskStatus.ToDo).Max(x=>x.Order)+1:0;
            task.Status=TaskStatus.ToDo;
            _context.Tasks.Add(task);
            
            _context.SaveChangesAsync();
            return Ok();    
        }

        [HttpPut]
        public IActionResult Update([FromBody]Task task)
        {
            _context.Tasks.Update(task);

            
            return Ok(_context.SaveChangesAsync());
        }
    }
}