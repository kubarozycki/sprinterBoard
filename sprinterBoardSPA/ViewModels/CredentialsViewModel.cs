// using FluentValidation.Attributes;
namespace TasksApi.ViewModels
{
        // [Validator(typeof(RegistrationViewModelValidator))]
        public class CredentialsViewModel
        {
            public string UserName { get; set; }
            public string Password { get; set; }
           
        }
}
