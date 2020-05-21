import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';


const routes: Routes = [
  { path: "main-page", component: MainPageComponent },
  { path: "", redirectTo: "/main-page", pathMatch: "full" },
  { path: "**", redirectTo: "/main-page", pathMatch: "full" },
  { path: "watchlist-page", component: WatchlistPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
