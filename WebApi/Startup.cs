using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using sprinterBoardDTO.Services.Concrete;
using sprinterBoardDTO.Services.Interface;
using spriterBoardSPA.Models;

namespace WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            var t= Configuration["ConnectionString"];
            services.AddDbContext<TaskContext>(opt => opt.UseSqlServer(Configuration["ConnectionString"]));

            services.AddIdentity<AppUser, IdentityRole>
                (o =>
                {
                    o.Password.RequireDigit = false;
                    o.Password.RequireLowercase = false;
                    o.Password.RequireUppercase = false;
                    o.Password.RequireNonAlphanumeric = false;
                    o.Password.RequiredLength = 6;
                })
            .AddEntityFrameworkStores<TaskContext>();

            services.AddSingleton<ITaskService>(service => new TaskService(Configuration["ConnectionString"]));

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters()
                    {

                        //ValidAudience = Configuration["JwtIssuerOptions:Audience"],
                        //ValidIssuer = Configuration["JwtIssuerOptions:Issuer"],
                        //ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("sekret1234abcda444555"))
                        //ValidateLifetime = true
                    };

                });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }
            app.UseAuthentication()
            .UseCors("AllowAll")
            .UseStaticFiles();

            app.UseHttpsRedirection();
            app.UseMvc();

            app.Use(async (context, next) =>
            {
                if (context.Request.Path.Value.StartsWith("/api/"))
                {
                    await next();
                }
                else
                {
                    if(!context.Request.Path.Value.Contains("ngsw-worker.js")){
                        context.Response.ContentType = "text/html";
                    }
                    else
                    {
                        context.Response.ContentType = "application/javascript";
                        await context.Response.SendFileAsync(Path.Combine(env.WebRootPath, "ngsw-worker.js"));
                    }
                    await context.Response.SendFileAsync(Path.Combine(env.WebRootPath, "index.html"));
                }
            });
        }
    }
}
