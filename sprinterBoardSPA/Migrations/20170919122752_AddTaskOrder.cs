using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace spriterBoardSPA.Migrations
{
    public partial class AddTaskOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Order",
                table: "Tasks",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Order",
                table: "Tasks");
        }
    }
}
