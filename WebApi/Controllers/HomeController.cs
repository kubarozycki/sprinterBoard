using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;
using System.IO;

namespace sprinterBoardSPA.Controllers
{
    public class HomeController:Controller
    {
        readonly IHostingEnvironment environment;
        public HomeController(IHostingEnvironment _envinronment)
        {
            this.environment = _envinronment;
        }
        public IActionResult Index()
        {
            return new PhysicalFileResult(
        Path.Combine(environment.WebRootPath, "index.html"),
        new MediaTypeHeaderValue("text/html")
            );
        }
    }
}
