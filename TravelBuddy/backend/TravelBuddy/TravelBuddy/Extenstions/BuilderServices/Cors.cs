namespace TravelBuddy.API.Extenstions.BuilderServices
{
	public static class Cors
	{
		public static IServiceCollection AddApplicationCors(this IServiceCollection services)
		{
			return services.AddCors(opt =>
			{
				opt.AddPolicy(name: "TravelBuddy", opt =>
				{
					opt
					.AllowAnyHeader()
					.AllowAnyMethod()
					.AllowAnyOrigin();
				});
			});
		}
	}
}
