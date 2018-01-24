using Microsoft.AspNetCore.Identity;

namespace spriterBoardDAL.Models
{
public class AppUser : IdentityUser
{
        // Extended Properties
    public string FirstName { get; set; }
    public string LastName { get; set; }       
}
}