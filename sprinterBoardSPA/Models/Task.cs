namespace spriterBoardSPA.Models
{
    public class Task
    {
        public long Id{get;set;}
        public string Name{get;set;}
        public string Description{get;set;}
        public TaskStatus Status {get;set;}
        
        public AppUser User { get; set; }
        public int Order{get;set;}
        
    }
}