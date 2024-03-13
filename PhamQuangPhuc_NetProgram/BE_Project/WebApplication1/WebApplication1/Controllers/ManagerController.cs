using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{

    [Authorize(Roles ="Admin")]
    public class ManagerController : Controller
    {
        private readonly UserManager<IdentityUser> _userManager;

        public ManagerController(UserManager<IdentityUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpGet]
        public IActionResult Index()
        {
            List<IdentityUser> users = _userManager.Users.ToList();
            // Do something with the users, for example, pass them to a view
            return View(users);
        }
    }
}
