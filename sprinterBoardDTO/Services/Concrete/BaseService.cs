using Microsoft.EntityFrameworkCore;
using sprinterBoardDTO.Services.Interface;
using spriterBoardDAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace sprinterBoardDTO.Services.Concrete
{
    public class BaseService : IService
    {
        public BaseService(string ConnectionString)
        {
            TaskContext.ConnectionString = ConnectionString;
            var optionsBuild = new DbContextOptionsBuilder<TaskContext>();
            optionsBuild.UseSqlServer(ConnectionString);
            _dbContext = new TaskContext(optionsBuild.Options);
        }
        private readonly TaskContext _dbContext;

        public TaskContext DatabaseContext { get => _dbContext; }
    }
}
