namespace TravelBuddy.Application.Interfaces.Repository
{
	public interface IUserRepository
	{
		/// <summary>
		/// Adding an User type entity in the database
		/// </summary>
		/// <param name="appointment">User type variable</param>
		/// <returns></returns>
		Task AddAsync(User appointment);

		/// <summary>
		/// Updating the User entity in the database
		/// </summary>
		/// <param name="appointment">User type variable</param>
		/// <returns></returns>
		void Update(User appointment);

		/// <summary>
		/// Gets the entity from the database by its Id
		/// </summary>
		/// <param name="id">The id of the User entity</param>
		/// <returns>Return the User entity</returns>
		Task<User> GetByIdAsync(int id);

		/// <summary>
		/// Gets a collection of User type entites
		/// </summary>
		/// <returns></returns>
		Task<ICollection<User>> GetAllAsync();

		/// <summary>
		/// Gets all the appointments and accepts a predicate for sarch term
		/// </summary>
		/// <returns></returns>
		Task<ICollection<User>> GetAllAsync(Expression<Func<User, bool>> search);

		/// <summary>
		/// Gets all the Users and uses AsNoTracking method
		/// </summary>
		/// <returns></returns>
		Task<ICollection<User>> GetAllAsReadOnlyAsync();

		/// <summary>
		/// Gets all the Users and accepts a predicate for sarch term also uses
		/// AsNoTracking method
		/// </summary>
		/// <returns></returns>
		Task<ICollection<User>> GetAllAsReadOnlyAsync(Expression<Func<User, bool>> search);

		/// <summary>
		/// Gets the entity from the database by its Id and its using AsNoTracking method
		/// </summary>
		/// <param name="id">The id of the User entity</param>
		/// <returns>Return the User entity</returns>
		Task<User> GetByIdAsReadonlyAsync(int id);

		/// <summary>
		/// Gets the entity from the database by its Id and 
		/// applies predicate for where clause. Also its using AsNoTracking method
		/// </summary>
		/// <param name="id">The id of the User entity</param>
		/// <param name="search">Expression that is aplpied for the where clause</param>
		/// <returns>Return the User entity</returns>
		Task<User> GetByIdAsReadonlyAsync(int id, Expression<Func<User, bool>> search);

		/// <summary>
		/// Saves all changes that are done
		/// </summary>
		/// <returns></returns>
		Task SaveAsync();
	}
}
