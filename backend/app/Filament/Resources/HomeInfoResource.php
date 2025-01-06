<?php

namespace App\Filament\Resources;

use App\Filament\Resources\HomeInfoResource\Pages;
use App\Filament\Resources\HomeInfoResource\RelationManagers;
use App\Models\HomeInfo;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\ColorPicker;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ColorColumn;

class HomeInfoResource extends Resource
{
    protected static ?string $model = HomeInfo::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                FileUpload::make('logo')->required()->label("Site Logo"),
                TextInput::make('whatsapp_number')->required()->label("Whatsapp Number"),
                TextInput::make('mobile_number')->required()->label("Mobile Number"),
                TextInput::make('email')->required()->label("Email"),
                FileUpload::make('banner_imgs')->required()->label("Banner Images")->multiple(5),
                FileUpload::make('slider_imgs')->required()->label("Slider Images")->multiple(5),


                TextInput::make('facebooklink')->label("Facebook Link"),
                TextInput::make('instagramlink')->label("Instagram Link"),
                TextInput::make('youtubelink')->label("Youtube Link"),
                ColorPicker::make('color')->label("Theme Color")
            
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('logo')->label("Site Logo"),
                TextColumn::make('whatsapp_number')->label("Whatsapp Number"),
                TextColumn::make('mobile_number')->label("Mobile Number"),
                TextColumn::make('email')->label("Email"),
                ImageColumn::make('banner_imgs')->label("Banner Images"),
                ImageColumn::make('slider_imgs')->label("Slider Images"),

                TextColumn::make('facebooklink')->label("facebook link"),
                TextColumn::make('instagramlink')->label("instagram link"),
                TextColumn::make('youtubelink')->label("youtube link"),
                TextColumn::make('whatsapp_number')->label("Whatsapp Number"),
                ColorColumn::make('color')->label("Color"),
                
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListHomeInfos::route('/'),
            'create' => Pages\CreateHomeInfo::route('/create'),
            'edit' => Pages\EditHomeInfo::route('/{record}/edit'),
        ];
    }
}
