using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;

using IdentityApp.Models;
using IdentityApp.Data;
using IdentityAppRepositories.UnitOfWork;
using Microsoft.AspNetCore.Authorization;
using System.Data;

namespace FastTrack.Controllers
{
    public class CompaniesController : Controller
    {

        private UnitOfWork _unitOfWork;
        public CompaniesController(ApplicationDbContext context)
        {
            _unitOfWork = new UnitOfWork(context);
        }


        // GET: Companies
        [Authorize(Roles = "Administrator, Moderator")]
        public async Task<IActionResult> Index()
        {
          var listCompany = _unitOfWork.CompanyRepository.Get();
          return View(listCompany);
        }

        // GET: Companies/Details/5
        [Authorize(Roles = "Administrator, Moderator")]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var company = _unitOfWork.CompanyRepository.GetByID(id);
            if (company == null)
            {
                return NotFound();
            }

            return View(company);
        }

        // GET: Companies/Create
        [Authorize(Roles = "Administrator, Moderator")]
        public IActionResult Create()
        {
            return View();
        }

        // POST: Companies/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [Authorize(Roles = "Administrator, Moderator")]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("CompanyId,CompanyName,Domain,Director,TaxNumber,Email,PhoneNumber,Website")] Company company)
        {
            if (ModelState.IsValid)
            {
                _unitOfWork.CompanyRepository.Insert(company);
                return RedirectToAction(nameof(Index));
            }
            return View(company);
        }

        // GET: Companies/Edit/5
        [Authorize(Roles = "Administrator, Moderator")]
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var company = _unitOfWork.CompanyRepository.GetByID(id);
            if (company == null)
            {
                return NotFound();
            }
            return View(company);
        }

        // POST: Companies/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [Authorize(Roles = "Administrator, Moderator")]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("CompanyId,CompanyName,Domain,Director,TaxNumber,Email,PhoneNumber,Website")] Company company)
        {
            if (id != company.CompanyId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _unitOfWork.CompanyRepository.Update(company);
                }
                catch (DbUpdateConcurrencyException)
                {
                  
                        throw;
                    
                }
                return RedirectToAction(nameof(Index));
            }
            return View(company);
        }

        // GET: Companies/Delete/5
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var company = _unitOfWork.CompanyRepository.GetByID(id);
            if (company == null)
            {
                return NotFound();
            }

            return View(company);
        }

        // POST: Companies/Delete/5
        [Authorize(Roles = "Administrator")]
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            _unitOfWork.CompanyRepository.Delete(id);
            /*await _companyRepository.DeleteCompany(id);*/

            return RedirectToAction(nameof(Index));
        }

      
    }
}
