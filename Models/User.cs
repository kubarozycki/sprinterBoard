using evidenceApp.Models;

public class User
{
    public int Id { get; set; }
    public string IdentityId { get; set; }
    public AppUser Identity { get; set; }  // navigation property
    public string Location { get; set; }
}