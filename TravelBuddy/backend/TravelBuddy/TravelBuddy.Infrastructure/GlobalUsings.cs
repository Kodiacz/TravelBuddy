﻿global using System.Text;
global using System.Linq.Expressions;
global using System.Security.Cryptography;

global using Microsoft.EntityFrameworkCore;
global using Microsoft.EntityFrameworkCore.Metadata.Builders;

global using AutoMapper;

global using TravelBuddy.Domain.Entities;
global using TravelBuddy.Application.Interfaces;
global using TravelBuddy.Application.Interfaces.Services;
global using TravelBuddy.Application.Interfaces.Repository;
global using static TravelBuddy.Infrastructure.Common.DatabaseConstants.ActivityConstants;
global using static TravelBuddy.Infrastructure.Common.DatabaseConstants.ItineraryConstants;
global using static TravelBuddy.Infrastructure.Common.DatabaseConstants.TripConstants;
global using static TravelBuddy.Infrastructure.Common.DatabaseConstants.UserConstants;