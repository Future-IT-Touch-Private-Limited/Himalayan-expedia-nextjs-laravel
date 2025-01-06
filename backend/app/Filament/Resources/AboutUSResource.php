<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AboutUSResource\Pages;
use App\Filament\Resources\AboutUSResource\RelationManagers;
use App\Models\AboutUS;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Repeater;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;



class AboutUSResource extends Resource
{
    protected static ?string $model = AboutUS::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                FileUpload::make('banner_img')->required()->label("Banner Image"),
                TextInput::make('banner_text')->required()->label("Banner Title"),
                TextInput::make('banner_des')->required()->label("Banner Des"),

                Repeater::make('our_vission')
                ->schema([
                    FileUpload::make('image')->required()->label("Image"),
                    TextInput::make('text')->required()->label("About"),
                    ])
                ->columns(2),
                
                RichEditor::make('about_text')->required()->label("About Des"),
                FileUpload::make('about_img')->required()->label("About Images"),

                Repeater::make('faq')
                ->schema([
                   TextInput::make('question')->required()->label("Question"),
                    TextInput::make('answer')->required()->label("Answer"),
                    ])
                ->columns(2),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('banner_img')->label("Banner Image"),
                TextColumn::make('banner_text'),
                TextColumn::make(name: 'banner_des'),
                TextColumn::make(name: 'about_text'),
                ImageColumn::make('about_img')->label("About Image"),
                TextColumn::make(name: 'our_vission'),
                TextColumn::make(name: 'faq'),

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
            'index' => Pages\ListAboutUS::route('/'),
            'create' => Pages\CreateAboutUS::route('/create'),
            'edit' => Pages\EditAboutUS::route('/{record}/edit'),
        ];
    }
}
