using System.Threading.Tasks;
using System.Security.Claims;
namespace sprinterBoard.JWT
{
    public interface IJwtFactory
    {
         Task<string> GenerateEncodedToken(string userName,ClaimsIdentity claims);
         ClaimsIdentity GenerateClaimsIdentity(string userName,string id);
    }
}