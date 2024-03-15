using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.WebUtilities;
using System.ComponentModel.DataAnnotations;
using System.Security.Principal;
using System.Text;
using WebApplication1_DTO.Request;

namespace WebApplication1.Controllers
{

   
    public class ManagerController : Controller
    {
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly UserManager<IdentityUser> _userManager;

        private readonly IUserStore<IdentityUser> _userStore;
        private readonly IUserEmailStore<IdentityUser> _emailStore;


        public ManagerController(
             UserManager<IdentityUser> userManager,
             IUserStore<IdentityUser> userStore,
             SignInManager<IdentityUser> signInManager
             
             )
        {
            _userManager = userManager;
            _userStore = userStore;
            _emailStore = GetEmailStore();
            _signInManager = signInManager;
         
        }
        public string? ReturnUrl { get; set; } = null;

        [HttpGet]
        [Authorize(Roles = "Admin")]
        public IActionResult Index()
        {
            List<IdentityUser> users = _userManager.Users.ToList();
            // Do something with the users, for example, pass them to a view
            return View(users);
        }


        public IList<AuthenticationScheme> ExternalLogins { get; set; }


        [HttpPost]
        public async Task<IActionResult> CreateAccount([FromBody]CreateAccountByAdmin createAccountByAdmin)
        {
         
            try
            {
                
                ExternalLogins = (await _signInManager.GetExternalAuthenticationSchemesAsync()).ToList();
                if (ModelState.IsValid)
                {
                    var user = CreateUser();
                    user.PhoneNumber = createAccountByAdmin.Phone;
                    await _userStore.SetUserNameAsync(user, createAccountByAdmin.UserName, CancellationToken.None);
                    string email = createAccountByAdmin.Email;
                    await _emailStore.SetEmailAsync(user, createAccountByAdmin.Email, CancellationToken.None);
                    user.EmailConfirmed = true;
                 
                    var result = await _userManager.CreateAsync(user, createAccountByAdmin.Password);
                    if (result.Succeeded)
                    {
                        //User created a new account with password.
                        var userId = await _userManager.GetUserIdAsync(user);
                        var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                        await _userManager.AddToRoleAsync(user, createAccountByAdmin.Role);    
                        code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
                        return new JsonResult("Create ok");
                    }
                    else
                    {
                        //await _signInManager.SignInAsync(user, isPersistent: false);
                        //var errorList = result.Errors.Select(error => new
                        //{
                        //    Code = error.Code,
                        //    Description = error.Description
                        //}).ToList();

                        //return new JsonResult(new
                        //{
                        //    Errors = errorList
                        //});
                        return new JsonResult(result.Errors);
                    }

                }
                return new JsonResult("Fails");
            }
            catch(Exception ex) {
                return StatusCode(500, ex.Message);

            }
        }



        private IdentityUser CreateUser()
        {
            try
            {
                return Activator.CreateInstance<IdentityUser>();
            }
            catch
            {
                throw new InvalidOperationException($"Can't create an instance of '{nameof(IdentityUser)}'. " +
                    $"Ensure that '{nameof(IdentityUser)}' is not an abstract class and has a parameterless constructor, or alternatively " +
                    $"override the register page in /Areas/Identity/Pages/Account/Register.cshtml");
            }
        }
        private IUserEmailStore<IdentityUser> GetEmailStore()
        {
            if (!_userManager.SupportsUserEmail)
            {
                throw new NotSupportedException("The default UI requires a user store with email support.");
            }
            return (IUserEmailStore<IdentityUser>)_userStore;
        }


      
    }
}
