using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApplication1_DTO.Response;
using WebApplication1_Service.IService;
using WebApplication1_Service.Service;

namespace WebApplication1.Controllers
{
    public class ContactUsController : Controller
    {
      
        private readonly IContactUsService contactUsService;
        public ContactUsController()
        {
            contactUsService = new ContactUsService();
        }

        public IActionResult ContactForm()
        {
            return View();
        }

        /// <summary>
        /// Get All contact us isActive=true
        /// </summary>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        [Authorize("Admin")]
        public async Task<IActionResult> ListContact()
        {
            try
            {
                ListContactUsResponse listContactUsResponse =  await contactUsService.GetListContactUs();
                return View(listContactUsResponse);
            }catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
