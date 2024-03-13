using IdentityApp.Data;
using IdentityApp.Models;
using IdentityAppRepositories.IRepositories;
using IdentityAppRepositories.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityAppRepositories.UnitOfWork
{
    public class UnitOfWork : IDisposable
    {
        private ApplicationDbContext _context;
        private IContactRepository _contactRepository;
        private ICompanyRepository _companyRepository;
        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
        }
        public IContactRepository ContactRepository
        {
            get
            {
                if (_contactRepository == null)
                {
                    _contactRepository = new ContactRepository(_context);
                }
                return _contactRepository;
            }
        }
        public ICompanyRepository CompanyRepository
        {
            get
            {

                if (_companyRepository == null)
                {
                   _companyRepository = new CompanyRepository(_context);
                }
                return _companyRepository;
            }
        }


        public void Save()
        {
            _context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
