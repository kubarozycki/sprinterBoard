using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using System.IO;
using evidenceApp.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Configuration;
using sprinterBoard.JWT;
using evidenceApp.Helpers;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace evidenceApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            this.Configuration = configuration;
        }
        
        private const string SecretKey = "iNivDmHLpUA223sqsfhqGbMRdRj1PVkH"; // todo: get this from somewhere secure
        private readonly SymmetricSecurityKey _signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(SecretKey));
        public IConfiguration Configuration { get; set; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<TaskContext>(opt => opt.UseSqlServer(@"Server=localhost\SQLEXPRESS;Initial Catalog=SprinterDB;Integrated Security=True;MultipleActiveResultSets=True;"));

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
            //.AddDefaultTokenProviders();
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    //options.Audience = Configuration["Audience"];
                    options.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidAudience = Configuration["JwtIssuerOptions:Audience"],
                        ValidIssuer= Configuration["JwtIssuerOptions:Issuer"],
                        ValidateIssuerSigningKey=true,
                        IssuerSigningKey=new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JwtIssuerOptions:Key"])),
                        ValidateLifetime=true
                    };

                });

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            DefaultFilesOptions options = new DefaultFilesOptions();
            options.DefaultFileNames.Clear();
            options.DefaultFileNames.Add("index.html");



            app.Use(async (context, next) =>
            {
                await next();
                if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
                {
                    context.Request.Path = "/index.html";
                    await next();
                } 
            })
            .UseAuthentication()
            .UseCors("AllowAll")
            .UseMvc()
            .UseDefaultFiles(options)
            .UseStaticFiles();


        }
    }
}
