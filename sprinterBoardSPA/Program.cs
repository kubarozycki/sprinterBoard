using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using sprinterBoardSPA.Helpers;

namespace spriterBoardSPA
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseKestrel(options => options.ConfigureEndpoints())
                .UseStartup<Startup>()
                .Build();
    }
}
