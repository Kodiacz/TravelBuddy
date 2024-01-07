namespace TravelBuddy.API.Extenstions.BuilderServices
{
	public static class ApplicationAuthentication
	{
		public static AuthenticationBuilder AddApplicationAuthentication(this IServiceCollection services, WebApplicationBuilder builder)
		{
			var jwtSettings = builder.Configuration;

			return services.AddAuthentication(opt =>
			{
				opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
				opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
				opt.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
			}).AddJwtBearer(opt =>
			{
				opt.RequireHttpsMetadata = false;
				opt.SaveToken = true;
				opt.TokenValidationParameters = new TokenValidationParameters
				{
					ValidateIssuer = false,
					ValidateAudience = false,
					ValidateIssuerSigningKey = true,
					IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings["JwtSettings:Key"]!)),
				};
			});
		}
	}
}
