var builder = WebApplication.CreateBuilder(args);

//builder.WebHost.ConfigureKestrel((context, serverOption) =>
//{
//	serverOption.Listen(IPAddress.Loopback, 5000);
//	//serverOption.Listen(IPAddress.Loopback, 5001, listenOptions => {
//	//	listenOptions.UseHttps("testCert.pfx", "testPassword");
//	//});
//});

//builder.WebHost.UseUrls("https://192.168.1.6:7024");

builder.Services.AddControllers(configure =>
{
	configure.Filters.AddApplicationFilters();
})
.AddNewtonsoftJson();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(opt =>
{
	opt.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
	{
		Description = "Standard Authorization header using the Bearer scheme (\"bearer {token}\")",
		In = ParameterLocation.Header,
		Name = "Authorization",
		Type = SecuritySchemeType.ApiKey
	});

	opt.OperationFilter<SecurityRequirementsOperationFilter>();
});

builder.Services.ConfigureDatabaseConnection(builder);

builder.Services.AddBlobStorageService(builder);

builder.Services.AddApplicationIdentity();

builder.Services.AddApplicationCors();

builder.Services.AddAutoMapper(typeof(Program));

builder.Services.AddApplicationAuthentication(builder);

builder.Services.AddApplicationServices();

builder.Services.InitializeExceptionStatusCodeMappings();

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
	app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();
app.UseAuthentication();

app.UseRouting();

app.UseCors("TravelBuddy");

app.UseAuthorization();

app.MapControllers();

app.Run();