namespace TravelBuddy.API.Extenstions.BuilderServices
{
	public static class ApplicationServices
	{
		public static IServiceCollection AddApplicationServices(this IServiceCollection services)
		{
			services.AddScoped<IUnitOfWork, UnitOfWork>();
			services.AddScoped<IActivityRepository, ActivityRepository>();
			services.AddScoped<IApplicationUserRepository, ApplicationUserRepository>();
			services.AddScoped<IItineraryRepository, ItineraryRepository>();
			services.AddScoped<ITripRepository, TripRepository>();
			services.AddScoped<IAuthService, AuthService>();

			return services;
		}
	}
}
