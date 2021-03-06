using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using spriterBoardSPA.Models;
using System.Linq;
using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using sprinterBoardDTO.Services.Interface;
using sprinterBoardDTO.ViewModels;
using System.Threading.Tasks;

namespace TasksApi.Controllers
{
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    //[Authorize]
    [Route("api/Tasks")]
    public class TasksController : Controller
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly TaskContext _context;
        private readonly ITaskService _taskService;

        public TasksController(TaskContext context,UserManager<AppUser> userManager,ITaskService taskService)
        {
            this._userManager = userManager;
            this._context = context;
            this._taskService = taskService;
        }

        
        [HttpGet("[action]/{id}")]
        public async Task<TaskViewModel> GetDetails(int id){
            return await _taskService.GetTaskAsync(id);
        }

        [HttpGet("[action]")]
        public async Task<IEnumerable<TaskRowViewModel>> GetAll([FromQuery]string username)
        {
            return await _taskService.GetAllAsync(username);
        }

        

        [HttpPost]
        public async Task<IActionResult> Add([FromBody]TaskViewModel task)
        {
            var taskId= await _taskService.AddAsync(task);
            return Ok(taskId);
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody]TaskViewModel task)
        {
            var updated= await _taskService.UpdateAsync(task);
            return Ok(updated);
        }

        [HttpDelete("[action]/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            _taskService.Remove(id);
            return Ok();
        }

    }
}