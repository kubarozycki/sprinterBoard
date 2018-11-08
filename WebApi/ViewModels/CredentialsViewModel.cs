// using FluentValidation.Attributes;
namespace TasksApi.ViewModels
{
        // [Validator(typeof(RegistrationViewModelValidator))]
        public class CredentialsViewModel
        {
            public string Email { get; set; }
            public string Password { get; set; }
           
        }
}
