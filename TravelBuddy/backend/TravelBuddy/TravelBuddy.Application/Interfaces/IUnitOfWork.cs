namespace TravelBuddy.Application.Interfaces
{
	public interface IUnitOfWork : IDisposable
	{
		public IActivityRepository ActivityRepository { get; }

		public IApplicationUserRepository ApplicationUserRepository { get; }

		public IItineraryRepository ItineraryRepository { get; }

		public ITripRepository TripRepository { get; }

	}
}
