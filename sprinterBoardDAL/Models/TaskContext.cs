using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Protocols;

namespace spriterBoardDAL.Models
{
    public class TaskContext : DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options)
            : base()
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Task>();
        
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(ConnectionString);
        }

        public static string ConnectionString { get; set; }
        public DbSet<Task> Tasks { get; set; }
        public DbSet<AppUser> AppUsers{get;set;}
        

    }
}