using Microsoft.EntityFrameworkCore;
using spriterBoardDAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace sprinterBoardDTO.Services.Interface
{
    public interface IService
    {
        TaskContext DatabaseContext { get;}
    }
}
