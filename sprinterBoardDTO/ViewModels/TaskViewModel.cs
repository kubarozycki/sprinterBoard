using spriterBoardDAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace sprinterBoardDTO.ViewModels
{
    public class TaskViewModel
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public TaskStatus Status { get; set; }
        public string UserId { get; set; }
        public int Order { get; set; }
    }
}
