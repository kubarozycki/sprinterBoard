//using spriterBoardSPA.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using sprinterBoard.JWT;
using System.Security.Claims;
using System.Threading.Tasks;
using TasksApi.ViewModels;
using System.Linq;
using spriterBoardSPA.Models;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Configuration;
using System;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace sprinterBoard.Controllers
{
    [Route("api/Auth")]
    public class AuthController:Controller
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IConfiguration _configuration;

        public AuthController(UserManager<AppUser> userManager,IConfiguration configuration)
        {
            _userManager = userManager;
            _configuration = configuration;

        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]CredentialsViewModel credentials)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var identity =await ValidateLoginAsync(credentials.Email, credentials.Password);
            if (identity == null)
            {
                return new UnauthorizedResult();
            }
            else
            {   
                return Ok(new
                {
                    token=identity
                });
            }
        }

        private async Task<string> ValidateLoginAsync(string userName, string password)
        {
            if (!string.IsNullOrEmpty(userName) && !string.IsNullOrEmpty(password))
            {
                var userToVerify =await  _userManager.FindByNameAsync(userName);
                if (userToVerify != null)
                {
                    if (await _userManager.CheckPasswordAsync(userToVerify, password))
                    {
                        return await System.Threading.Tasks.Task.FromResult(GenerateToken(userToVerify.UserName));
                    }
                }
            }

            return await System.Threading.Tasks.Task.FromResult<string>(null);
        }

        private string GenerateToken(string userID)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {

                    new Claim(ClaimTypes.Name,userID)
                }),
                Expires = DateTime.UtcNow.AddDays(30),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.ASCII.GetBytes("sekret1234abcda444555")), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return tokenString;
        }


    }
}