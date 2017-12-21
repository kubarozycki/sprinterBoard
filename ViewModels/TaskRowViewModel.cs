using evidenceApp.Models;
namespace evidenceApp.ViewModels
{
   

    public class TaskRow
    {
        // public int Order{get;set;}
        public Task ToDo {get;set;}
        public Task InProgress {get;set;}
        public Task Done {get;set;}
    }
    
}