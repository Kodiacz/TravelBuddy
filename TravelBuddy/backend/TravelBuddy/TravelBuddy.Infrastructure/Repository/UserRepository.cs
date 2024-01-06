
namespace TravelBuddy.Infrastructure.Repository
{
	internal class ApplicationUserRepository : IApplicationUserRepository
	{
		private readonly TravelBuddyDbContext dbContext;

		public ApplicationUserRepository(TravelBuddyDbContext dbContext)
		{
			this.dbContext = dbContext;
		}

		public Task AddAsync(ApplicationUser appointment)
		{
			throw new NotImplementedException();
		}

		public Task<ICollection<ApplicationUser>> GetAllAsReadOnlyAsync()
		{
			throw new NotImplementedException();
		}

		public Task<ICollection<ApplicationUser>> GetAllAsReadOnlyAsync(Expression<Func<ApplicationUser, bool>> search)
		{
			throw new NotImplementedException();
		}

		public Task<ICollection<ApplicationUser>> GetAllAsync()
		{
			throw new NotImplementedException();
		}

		public Task<ICollection<ApplicationUser>> GetAllAsync(Expression<Func<ApplicationUser, bool>> search)
		{
			throw new NotImplementedException();
		}

		public Task<ApplicationUser> GetByIdAsReadonlyAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<ApplicationUser> GetByIdAsReadonlyAsync(int id, Expression<Func<ApplicationUser, bool>> search)
		{
			throw new NotImplementedException();
		}

		public Task<ApplicationUser> GetByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task SaveAsync()
		{
			throw new NotImplementedException();
		}

		public void Update(ApplicationUser appointment)
		{
			throw new NotImplementedException();
		}
	}
}
