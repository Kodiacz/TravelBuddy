namespace TravelBuddy.API.Extenstions.BuilderServices
{
	public static class DbConnection
	{
		public static IServiceCollection ConfigureDatabaseConnection(this IServiceCollection services, WebApplicationBuilder builder)
		{
			var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
			return builder.Services.AddDbContext<TravelBuddyDbContext>(opt =>
			{
				opt.UseSqlServer(connectionString)
					.UseLoggerFactory(LoggerFactory.Create(builder => builder.AddConsole()))
					.EnableSensitiveDataLogging();
			});
		}
	}
}
