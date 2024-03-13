using Google.Protobuf.WellKnownTypes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics;
using WebApplication1.Models;
using WebApplication1_DTO.Request;
using WebApplication1_DTO.Response;
using WebApplication1_Service.IService;
using WebApplication1_Service.Service;

namespace WebApplication1.Controllers
{
    public class ContactUsController : Controller
    {
      
        private readonly IContactUsService contactUsService;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        public ContactUsController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager )
        {
            contactUsService = new ContactUsService();
            _userManager = userManager;
            _signInManager = signInManager;

        }
        [BindProperty]
        public InputModel Input { get; set; }
        public class InputModel
        {
            
            [Required]
            [DataType(DataType.Text)]
            public string? FullName { get; set; }

            [Required]
            [DataType(DataType.PhoneNumber)]
            public string BusinessPhone { get; set; } = string.Empty;

            [Required]
            public string? CompanyName { get; set; }

            [Required]
            [EmailAddress]
            public string? Email { get; set; }

            [Column("message")]
            public string Message { get; set; } = string.Empty;

            [Column("message")]
            public string Captcha { get; set; } = string.Empty;

        }

        /// <summary>
        /// Get All contact us isActive=true
        /// </summary>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        [Authorize(Roles = "Admin, UserStaff")]
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


        /// <summary>
        /// Create New ContactUs
        /// </summary>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
  
        [Authorize(Roles = "User")]
        public async Task<IActionResult> ContactForm(ContactUsRequest request)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    request = new ContactUsRequest()
                    {
                        Email = Input.Email!=null ? Input.Email: string.Empty,
                        BusinessPhone=Input.BusinessPhone !=null ? Input.BusinessPhone : string.Empty,
                        CompanyName= Input.CompanyName!=null? Input.CompanyName :string.Empty,
                        FullName = Input.FullName!=null? Input.FullName : string.Empty,
                        Message = Input.Message!=null ? Input.Message : string.Empty,
                        Phone = Input.BusinessPhone!= null ? Input.BusinessPhone : string.Empty,
                    };
                    string userId = _userManager.GetUserId(User);
                    Guid.TryParse(userId, out Guid guidValue);
                    bool insert = await contactUsService.InsertContactUs(request, guidValue);
                    if (insert)
                    {
                        View(
                            new ErrorViewModel
                            {
                                StatusError = 1,
                                ShowRequesValue="Success Create New Contact"
                            }); 
                    }
                    else
                    {
                        View(
                             new ErrorViewModel
                             {
                                 StatusError = 0,
                                 ShowRequesValue = "Fails Create New Contact"
                             });
                    }
                }
                return
                     View(
                             new ErrorViewModel
                             {
                                 StatusError = 0,
                                 ShowRequesValue = "Fails Create New Contact"
                             }); ;
            }
            catch (Exception ex)
            {
               
                throw new Exception(ex.Message);
            }
        }
    }
}
