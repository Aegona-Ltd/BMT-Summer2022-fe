using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    public class ContactUsController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        public ContactUsController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult ContactForm()
        {
            return View();
        }

    }
}
