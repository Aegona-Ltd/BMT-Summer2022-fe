using Database;
using WebApplication1_Entity.Entity;
using WebApplication1_Repository.Repository;

namespace WebApplication1_Repository.UnitOfWork
{
    public class UnitOfWork : IDisposable
    {
        private  ApplicationDbContext context =new ApplicationDbContext();

        private GenericRepository<ContactUs>? contactUsRepository;
        public GenericRepository<ContactUs> ContactUsRepository
        {
            get
            {

                if (this.contactUsRepository == null)
                {
                    this.contactUsRepository = new GenericRepository<ContactUs>(context);
                }
                return contactUsRepository;
            }
        }
        public int Save()
        {
          return  context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }
}
