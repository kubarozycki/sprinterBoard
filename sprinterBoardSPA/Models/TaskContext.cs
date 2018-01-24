using Microsoft.EntityFrameworkCore;

namespace spriterBoardSPA.Models
{
    public class TaskContext : DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options)
            : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Task>();
        
        }

        public DbSet<Task> Tasks { get; set; }
        // public DbSet<User> Users{get;set;}
        public DbSet<AppUser> AppUsers{get;set;}
        

    }
}