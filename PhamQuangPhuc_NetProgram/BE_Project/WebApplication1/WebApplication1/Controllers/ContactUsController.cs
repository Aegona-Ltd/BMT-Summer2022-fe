using Google.Protobuf.WellKnownTypes;
using Humanizer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Mysqlx.Crud;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics;
using WebApplication1.Models;
using WebApplication1_DTO.Request;
using WebApplication1_DTO.Response;
using WebApplication1_Entity.Entity;
using WebApplication1_Service.IService;
using WebApplication1_Service.Service;

namespace WebApplication1.Controllers
{
    [Authorize]
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

        public string ReturnUrl { get; set; }

        /// <summary>
        /// Get All contact us isActive=true
        /// </summary>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        [Authorize(Roles = "Admin, Staff")]
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
        /// watch ContactUs
        /// </summary>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        //[Authorize(Roles = "User")]
        public IActionResult ContactForm()
        {
            return View();
        }



        //public async Task<IActionResult> AddContactForm(ContactModel model)
        //{
        //    try
        //    {
        //        if (!ModelState.IsValid)
        //        {
        //            ContactUsRequest request = new ContactUsRequest()
        //            {
        //                Email = Input.Email != null ? Input.Email : string.Empty,
        //                BusinessPhone = Input.BusinessPhone != null ? Input.BusinessPhone : string.Empty,
        //                CompanyName = Input.CompanyName != null ? Input.CompanyName : string.Empty,
        //                FullName = Input.FullName != null ? Input.FullName : string.Empty,
        //                Message = Input.Message != null ? Input.Message : string.Empty,
        //                Phone = Input.BusinessPhone != null ? Input.BusinessPhone : string.Empty,
        //            };
        //            string userId = _userManager.GetUserId(User);
        //            Guid.TryParse(userId, out Guid guidValue);
        //            bool insert = await contactUsService.InsertContactUs(request, guidValue);
        //            if (insert)
        //            {
        //                View(
        //                    new ErrorViewModel
        //                    {
        //                        StatusError = 1,
        //                        ShowRequesValue = "Success Create New Contact"
        //                    });
        //            }
        //            else
        //            {
        //                View(
        //                     new ErrorViewModel
        //                     {
        //                         StatusError = 0,
        //                         ShowRequesValue = "Fails Create New Contact"
        //                     });
        //            }
        //        }

        //        return View();
        //    }
        //    catch (Exception ex)
        //    {

        //        throw new Exception(ex.Message);
        //    }
        //}

        //[Bind("FullName,BusinessPhone,CompanyName")]
        //ContactModel model


        /// <summary>
        /// Create ContactFrom data
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> AddContactForm(ContactUsRequest request )
        {
            try
            {
                if (ModelState.IsValid)
                {

                    var userId = _userManager.GetUserId(User);
                    Guid.TryParse(userId, out Guid guidValue); // Re-render the view with validation errors 
                    var insert = await contactUsService.InsertContactUs(request, guidValue);
                    ViewData["Message"] = "Insert Success";
                    if (insert)
                    {
                        TempData["color"] = "green";
                        TempData["ErrorMessage"] = "success";
                        return RedirectToAction("ContactForm", "ContactUs");
                    }

                    
                    else
                    {
                        TempData["color"] = null;
                        TempData["ErrorMessage"] = " Create contact Fails";
                        return RedirectToAction("ContactForm", "ContactUs");
                    }
                }
                else
                    TempData["color"] = null;
                    TempData["ErrorMessage"] = " Create contact Fails";
                return RedirectToAction("ContactForm", "ContactUs");
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
          

        }
    }

}
