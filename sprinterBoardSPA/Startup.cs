using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using System.IO;
using spriterBoardSPA.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.HttpOverrides;
using spriterBoardDAL.Models;
using sprinterBoardDTO.Services.Interface;
using sprinterBoardDTO.Services.Concrete;

namespace spriterBoardSPA
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            this.Configuration = configuration;
        }

        public IConfiguration Configuration { get; set; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<Models.TaskContext>(opt => opt.UseSqlServer(Configuration["ConnectionString"]));

            services.AddIdentity<Models.AppUser, IdentityRole>
                (o =>
                {
                    o.Password.RequireDigit = false;
                    o.Password.RequireLowercase = false;
                    o.Password.RequireUppercase = false;
                    o.Password.RequireNonAlphanumeric = false;
                    o.Password.RequiredLength = 6;
                })
            .AddEntityFrameworkStores<Models.TaskContext>();

            services.AddSingleton<ITaskService>(service => new TaskService(Configuration["ConnectionString"]));

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters()
                    {

                        ValidAudience = Configuration["JwtIssuerOptions:Audience"],
                        ValidIssuer = Configuration["JwtIssuerOptions:Issuer"],
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JwtIssuerOptions:Key"])),
                        ValidateLifetime = true
                    };

                });

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseForwardedHeaders(new ForwardedHeadersOptions
            {
                ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
            })
            .UseStaticFiles()
            .UseAuthentication()
            .UseCors("AllowAll")
            .UseMvc(routes =>
            {
                routes.MapRoute(
                name: "API",
                template: "api/{controller}/{action}/{id?}"
                );
                routes.MapSpaFallbackRoute(
                    name:"spa-fallback",
                    defaults:"index.html"
                    );
            });


        }
    }
}
