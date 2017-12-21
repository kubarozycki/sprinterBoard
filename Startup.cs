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
using Microsoft.EntityFrameworkCore;
namespace evidenceApp
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your applic ation, visit https://go.microsoft.com/fwlink/?LinkID=398940
        
        public void ConfigureServices(IServiceCollection services)
        {
            

            services.AddDbContext<TaskContext>(opt => opt.UseSqlServer(@"Server=localhost\SQLEXPRESS;Initial Catalog=SprinterDB;Integrated Security=True;MultipleActiveResultSets=True;"));
            
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
            .UseCors("AllowAll")
            .UseMvc()
            .UseDefaultFiles(options)
            .UseStaticFiles();
        }
    }
}
