namespace TravelBuddy.API.Extenstions.BuilderServices
{
	public static class ApplicationServices
	{
		public static IServiceCollection AddApplicationServices(this IServiceCollection services)
		{
			#region Repositories

			services.AddScoped<IUnitOfWork, UnitOfWork>();
			services.AddScoped<IActivityRepository, ActivityRepository>();
			services.AddScoped<IApplicationUserRepository, ApplicationUserRepository>();
			services.AddScoped<IItineraryRepository, ItineraryRepository>();
			services.AddScoped<ITripRepository, TripRepository>();

			#endregion

			#region Services

			services.AddScoped<IAuthService, AuthService>();
			services.AddScoped<ITripService, TripService>();
			services.AddScoped<IItineraryService, ItineraryService>();

			#endregion

			return services;
		}
	}
}
