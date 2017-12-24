
using System.Threading.Tasks;
using evidenceApp.Models;
using evidenceApp.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace TasksApi.Controllers
{
    [Route("api/Tasks")]
    public class UserController : Controller
    {
        private readonly TaskContext _context;

        public UserController(TaskContext context)
        {
            _context = context;


        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]RegistrationViewModel model)
        {
            // if (!ModelState.IsValid)
            // {
            //     return BadRequest(ModelState);
            // }

            // var userIdentity = _mapper.Map<AppUser>(model);
            // var result = await _userManager.CreateAsync(userIdentity, model.Password);

            // if (!result.Succeeded) return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));

            // await _appDbContext.JobSeekers.AddAsync(new JobSeeker { IdentityId = userIdentity.Id, Location = model.Location });
            // await _appDbContext.SaveChangesAsync();

            return new OkResult();
        }
    }
}