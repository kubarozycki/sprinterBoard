using System;
using System.Collections.Generic;
using System.Text;

namespace sprinterBoardDTO.ViewModels
{
    public class TaskRowViewModel
    {
        public TaskViewModel ToDo { get; set; }
        public TaskViewModel InProgress { get; set; }
        public TaskViewModel Done { get; set; }
    }
}
