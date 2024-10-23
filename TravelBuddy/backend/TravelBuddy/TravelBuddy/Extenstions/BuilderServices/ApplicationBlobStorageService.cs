namespace TravelBuddy.API.Extenstions.BuilderServices
{
	public static class ApplicationBlobStorageService
	{
		public static IServiceCollection AddBlobStorageService(this IServiceCollection services, WebApplicationBuilder builder)
		{
			services.AddSingleton(new BlobServiceClient(builder.Configuration.GetConnectionString("AzureBlobStorage")));

			services.AddScoped<IBlobStorageService, BlobStorageService>();

			return services;
		}
	}
}
