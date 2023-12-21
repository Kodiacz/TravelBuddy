
namespace TravelBuddy.Infrastructure.Repository
{
	internal class UserRepository : IUserRepository
	{
		private readonly TravelBuddyDbContext dbContext;

		public UserRepository(TravelBuddyDbContext dbContext)
		{
			this.dbContext = dbContext;
		}

		public Task AddAsync(User appointment)
		{
			throw new NotImplementedException();
		}

		public Task<ICollection<User>> GetAllAsReadOnlyAsync()
		{
			throw new NotImplementedException();
		}

		public Task<ICollection<User>> GetAllAsReadOnlyAsync(Expression<Func<User, bool>> search)
		{
			throw new NotImplementedException();
		}

		public Task<ICollection<User>> GetAllAsync()
		{
			throw new NotImplementedException();
		}

		public Task<ICollection<User>> GetAllAsync(Expression<Func<User, bool>> search)
		{
			throw new NotImplementedException();
		}

		public Task<User> GetByIdAsReadonlyAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task<User> GetByIdAsReadonlyAsync(int id, Expression<Func<User, bool>> search)
		{
			throw new NotImplementedException();
		}

		public Task<User> GetByIdAsync(int id)
		{
			throw new NotImplementedException();
		}

		public Task SaveAsync()
		{
			throw new NotImplementedException();
		}

		public void Update(User appointment)
		{
			throw new NotImplementedException();
		}
	}
}
