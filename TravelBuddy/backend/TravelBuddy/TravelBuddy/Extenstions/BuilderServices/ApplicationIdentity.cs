using Microsoft.AspNetCore.Identity;

namespace TravelBuddy.API.Extenstions.BuilderServices
{
	public static class ApplicationIdentity
	{
		public static IdentityBuilder AddApplicationIdentity(this IServiceCollection services)
		{
			return services.AddIdentity<ApplicationUser, IdentityRole<Guid>>(opt => opt.SignIn.RequireConfirmedAccount = true)
				.AddEntityFrameworkStores<TravelBuddyDbContext>()
				.AddDefaultTokenProviders();
		}
	}
}
