
using System.Threading.Tasks;
using spriterBoardSPA.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TasksApi.ViewModels;

namespace TasksApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly TaskContext _context;
        private readonly UserManager<AppUser> _userManager;

        public UserController(TaskContext context,UserManager<AppUser> userManager)
        {
            this._context = context;
            this._userManager=userManager;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]CredentialsViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var identity=new AppUser(){
                UserName=model.Email
                
            };

            var result= await _userManager.CreateAsync(identity,model.Password);
            return new OkResult();
        }
    }
}