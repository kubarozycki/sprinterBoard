using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using evidenceApp.Models;
using System.Linq;
using evidenceApp.ViewModels;

namespace TasksApi.Controllers
{
    [Route("api/[controller]")]
    public class TasksController : Controller
    {
        private readonly TaskContext _context;

        public TasksController(TaskContext context)
        {
            _context = context;

           
        }

        [HttpGet]
        public IEnumerable<TaskRow> GetAll()
        {
            return _context.Tasks.Select(y=>y.Order).Distinct().Select(x=>new TaskRow(){
                Order=x,
                ToDo=_context.Tasks.FirstOrDefault(todo=>todo.Order==x&&todo.Status==TaskStatus.ToDo),
                InProgress=_context.Tasks.FirstOrDefault(todo=>todo.Order==x&&todo.Status==TaskStatus.InProgress),
                Done=_context.Tasks.FirstOrDefault(todo=>todo.Order==x&&todo.Status==TaskStatus.Done)
            });;
        }

        [HttpPost]
        public IActionResult Add([FromBody]Task task)
        {
            task.Order=_context.Tasks.Max(x=>x.Order)+1;
            task.Status=TaskStatus.ToDo;
            _context.Tasks.Add(task);
            
            _context.SaveChangesAsync();
            return Ok();    
        }
    }
}