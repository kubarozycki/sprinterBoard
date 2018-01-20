//using evidenceApp.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using sprinterBoard.JWT;
using System.Security.Claims;
using System.Threading.Tasks;
using TasksApi.ViewModels;
using System.Linq;
using evidenceApp.Models;
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

            var identity =await ValidateLoginAsync(credentials.UserName, credentials.Password);
            if (identity == null)
            {
                return new UnauthorizedResult();
            }
            else
            {   
                return Ok(new
                {
                    token=new JwtSecurityTokenHandler().WriteToken(identity),
                    expiration=identity.ValidTo
                });
            }
        }

        private async Task<JwtSecurityToken> ValidateLoginAsync(string userName, string password)
        {
            if (!string.IsNullOrEmpty(userName) && !string.IsNullOrEmpty(password))
            {
                var userToVerify =await  _userManager.FindByNameAsync(userName);
                if (userToVerify != null)
                {
                    if (await _userManager.CheckPasswordAsync(userToVerify, password))
                    {
                        return await System.Threading.Tasks.Task.FromResult(GenerateToken(userToVerify.Id));
                    }
                }
            }

            return await System.Threading.Tasks.Task.FromResult<JwtSecurityToken>(null);
        }

        private JwtSecurityToken GenerateToken(string userID)
        {
            var claims = new[]
                        {
                            new Claim(JwtRegisteredClaimNames.Sub,userID),
                            new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString())

                        };
            var secure = _configuration["JwtIssuerOptions:Key"];
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secure));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                return
                    new JwtSecurityToken(
                    issuer: _configuration["JwtIssuerOptions:Issuer"],
                    audience: _configuration["JwtIssuerOptions:Audience"],
                    claims: claims,
                    expires: DateTime.UtcNow.AddMinutes(15),
                    signingCredentials: creds
                    );
        }


    }
}